import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Chip = ({ text, ...props }) => {
    const chipStyle = {
        display: 'inline-flex', // Change to inline-flex
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '20px',
        padding: '5px 10px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        color: '#333',
        alignItems: 'center', // Align items vertically
        marginLeft: '10px'
      };
    
      const closeBtnStyle = {
        background: 'none',
        border: 'none',
        padding: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        color: '#999',
      };

  return (
    <div style={chipStyle}>
      {text}
      <button style={closeBtnStyle} aria-label="Close" {...props}>
      <DeleteForeverIcon style={{color:'black'}}></DeleteForeverIcon>
      </button>
    </div>
  );
};

export default Chip;
