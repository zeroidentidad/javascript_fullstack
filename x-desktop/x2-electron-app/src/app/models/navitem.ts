export interface NavItem {
  name: string;
  disabled?: boolean;
  icon: string;
  route?: string;
  children?: NavItem[];
}
