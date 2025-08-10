export const usePhoneCall = () => {
  const handlePhoneCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const phoneNumber = "67727212";
    
    // Try multiple methods to ensure the call works
    try {
      // Method 1: Direct tel: link
      window.location.href = `tel:${phoneNumber}`;
      
      // Method 2: Fallback with timeout
      setTimeout(() => {
        if (window.location.href.indexOf('tel:') === -1) {
          window.location.href = `tel:${phoneNumber}`;
        }
      }, 100);
      
      // Method 3: Create and click a temporary link
      setTimeout(() => {
        const tempLink = document.createElement('a');
        tempLink.href = `tel:${phoneNumber}`;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      }, 200);
    } catch (error) {
      // Fallback: try to open in new window/tab
      window.open(`tel:${phoneNumber}`, '_blank');
    }
  };

  return { handlePhoneCall };
};
