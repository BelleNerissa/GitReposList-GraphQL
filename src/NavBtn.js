const NavBtn = ({
    next,
    previous,
    start,
    end,
    onPage
}) => {
    return (
        <div className="d-flex justify-content-end my-2">
            {previous && (
                <button
                    className="btn px-2 mx-1 btn-sm btn-primary bi bi-arrow-left"
                    onClick={() => onPage('last', 'before: "' + start + '"')}
                />)}
            {next && (
                <button
                    className="btn px-2 mx-1 btn-sm btn-primary bi bi-arrow-right"
                    onClick={() => onPage('first', 'after: "' + end + '"')}
                />)}
        </div>
    )
}

export default NavBtn;