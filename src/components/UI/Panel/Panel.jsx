function Panel({ mode = 'primary', className = '', children }) {
    const allowedModes = ['primary', 'secondary', 'success', 'danger', 'warning'];
    const validatedMode = allowedModes.includes(mode) ? mode : 'primary';

    return (
      <div className={`border-secondary bg-${validatedMode}-subtle p-3 rounded ${className}`}>
          {children}      
      </div>
    );
}

export default Panel;
