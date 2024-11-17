
function Panel({ mode = 'primary', className = '', children })  {

    return (
        <div className={`container border border-black d-flex flex-row`}>
            {children}
        </div>

    )

}

export default Panel;
