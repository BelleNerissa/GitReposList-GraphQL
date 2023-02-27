import styles from "./card.module.css";
const Repo = (props) => {
    const { repo } = props;
    return (
        <li className="list-group-item d-flex justify-content-between aling-items-center" key={repo.id.toString()}>
            <div className="d-flex flex-column">
                <a className="h5 mt-0 text-decoration-none" href={repo.url}>{repo.name}</a>
                <a className={styles.description}>{repo.url}</a>
                <p className="small">{new Date(repo.createdAt).toLocaleDateString()}</p>
                <div>{repo.primaryLanguage && (
                    <span className={styles.language}>
                        <span
                            className={styles.languageColor}
                            style={{ backgroundColor: repo.primaryLanguage?.color }}
                        />
                    </span>
                )}
                    <span itemProp="programmingLanguage">
                        {repo.primaryLanguage?.name}
                    </span></div>
            </div>
            <div className="d-flex flex-column">
            <br></br><span itemProp="createdAt">
            <b>{"Criado em: "}</b>{repo.createdAt}
            <br></br></span> <span itemProp="updatedAt">
            <b>{"Atualizado em: "}</b>{repo.updatedAt}
          </span>
          {repo.stargazerCount > 0 && (
            <a href={`${repo.url}/stargazers`} className={styles.stargazers + 'bi bi-star-fill'}>
               <span>{repo.stargazerCount}</span>
            </a>
          )}
            </div>
        </li>
    )
};

export default Repo;