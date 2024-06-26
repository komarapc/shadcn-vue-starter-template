export interface MenuSidebar {
  label: string;
  icon?: string;
  link?: string;
  active?: boolean;
  children?: MenuSidebar[];
}
