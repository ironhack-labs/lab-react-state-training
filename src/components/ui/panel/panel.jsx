function Panel({ mode = 'secondary', className = '', children  }) {
    return (
      <div className={`border-secondary bg-${mode}-subtle p-3 rounded ${className}`}>
          {children}      
      </div>
    );
  }
  export default Panel;
  