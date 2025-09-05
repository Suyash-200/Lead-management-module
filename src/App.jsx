import { useEffect, useState } from "react";
import "./App.css";
import {
  toastError,
  toastSuccess,
  useToastService,
} from "./Components/Toast/ToastService";
import CreateLeadModal from "./CreateLeadForm";
import LeadsTable from "./LeadsTable";
import { getAllLeads, updateLeadStatus } from "./services/api";
import { useLoading } from "./store/LoadingContext";

function App() {
  useToastService();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  useEffect(() => {
    loadLeads();
  }, []);

  useEffect(() => {
    updateFilteredLeads();
  }, [leads, page]);

  const loadLeads = async () => {
    try {
      startLoading();
      const data = await getAllLeads();
      console.log(data);
      if (data.length > 0) {
        setLeads([...data]);
        setTotal(data.length);
      } else {
        setTotal(0);
        setLeads([]);
      }
     
    } catch (err) {
      toastError("Failed to fetch leads");
      console.error("Error loading leads:", err);
    } finally {
      stopLoading();
    }
  };

  const updateFilteredLeads = () => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    setFilteredLeads(leads.slice(startIndex, endIndex));
  };

  
  const handleStatusChange = async (id, status) => {
    try {
      startLoading();
      await updateLeadStatus(id, status);
      toastSuccess("Lead status updated");
      loadLeads();
    } catch (err) {
      toastError("Failed to update status");
      console.error("Error updating status:", err);
    } finally {
      stopLoading();
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(total / limit)) {
      setPage(newPage);
    }
  };

  const handleAddLead = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLeadCreated = () => {
    if (page !== 1) {
      setPage(1);
    } else {
      loadLeads(); 
    }
  };

  return (
    <>
      <LeadsTable
        leads={filteredLeads}
        page={page}
        total={total}
        limit={limit}
        loading={isLoading}
        onPageChange={handlePageChange}
        onStatusChange={handleStatusChange}
        onAddLead={handleAddLead}
      />
      <CreateLeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLeadCreated={handleLeadCreated}
      />
    </>
  );
}

export default App;
