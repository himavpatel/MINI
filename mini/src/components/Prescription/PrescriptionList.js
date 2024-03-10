import React, { useEffect, useState } from 'react';
import PrescriptionService from '../services/prescriptionService';
import Prescription from './Prescription';

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    async function fetchPrescriptions() {
      try {
        const prescriptions = await PrescriptionService.getAllPrescriptions();
        setPrescriptions(prescriptions);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    }

    fetchPrescriptions();
  }, []);

  return (
    <div>
      <h2>Prescription List</h2>
      {prescriptions.map((prescription) => (
        <Prescription key={prescription.id} prescription={prescription} />
      ))}
    </div>
  );
};

export default PrescriptionList;
