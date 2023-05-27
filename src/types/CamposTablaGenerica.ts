export interface Column {
  title: string;
  field: string;
  width?: number;
}

export interface Action {
  create?: boolean;
  update?: boolean;
  delete?: boolean;
}

export interface TableProps {
  data: any[];
  columns: Column[];
  actions: Action;
  onAdd?: () => void;
  onUpdate?: (item: any) => void;
  onDelete?: (item: any) => void;
}

