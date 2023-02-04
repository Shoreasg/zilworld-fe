import { CardProps } from "../../../types";
import { mapProjects } from "../../functions";

export default function FinanceCard({ projectsData }: CardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {mapProjects("Finance", projectsData)}
    </div>
  );
}