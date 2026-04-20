import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Rule: Calculate pay date based on terms (default Net-30)
const calculatePayDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

export const logNewReceivable = async (clientName: string, amount: number, terms: number = 30) => {
  try {
    const payDate = calculatePayDate(terms);
    
    const docRef = await addDoc(collection(db, "receivables"), {
      client: clientName,
      amount: amount,
      status: "Pending",
      terms: `Net-${terms}`,
      inspectionDate: serverTimestamp(),
      expectedPayDate: payDate,
      ownerId: "ERIK_ADMIN" // We'll swap this for your real UID later
    });

    console.log("Receivable Logged! Tracking ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Failed to log money:", error);
  }
};
