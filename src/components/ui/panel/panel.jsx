
function Panel({ mode = 'primary', className = '', children }) { 
    
    return (
        <div className={`border-2 border-${mode}-subtle p-2 ${className}`}>
            {children}
        </div>
    )
}

export default Panel;