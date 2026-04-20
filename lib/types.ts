export type Inspection = {
  id: string;
  status: 'pending' | 'completed' | 'in-progress';
  address: string;
  inspectorId: string;
  data: any;
};

export type InspectionFormState = {
  status: "success" | "error" | "idle";
  message?: string;
};
