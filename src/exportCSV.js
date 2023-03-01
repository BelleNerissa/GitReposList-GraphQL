import { CSVLink } from "react-csv";
import styles from "./card.module.css";
const headers = [
    { label: "name", key: "node.name" },
    { label: "nameWithOwner", key: "node.nameWithOwner" },
    { label: "url", key: "node.url" },
    { label: "stargazerCount", key: "node.stargazerCount" },
    { label: "primaryLanguage", key: "node.primaryLanguage.name" },
    { label: "createdAt", key: "node.createdAt" },
    { label: "updatedAt", key: "node.updatedAt" },
    { closedIssues: "closedIssues", key: "closedIssues.totalCount" },
    { totalIssues: "totalIssues", key: "totalIssues.totalCount" },
];

const ExportCSV = (props) => {
    const { repo } = props;
    
    return (
        <CSVLink data={repo} headers={headers} >
            Exportar para CSV
        </CSVLink>
    )
};

export default ExportCSV;