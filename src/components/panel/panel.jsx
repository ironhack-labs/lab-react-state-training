function Panel({mode ='primary',className='', children}) {
    return (
        <div className={`border border-black bg-${mode}-subtle p-3 rounded ${className}`}>
            {children}      
        </div>
    )
}
export default Panel;