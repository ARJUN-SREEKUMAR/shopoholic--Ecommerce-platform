import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://embed.tawk.to/645148254247f20fefeef6eb/1gveo3lh3';
    s.setAttribute('crossorigin', '*');
    document.head.appendChild(s);

    const tawkToScript = document.createElement('script');
    tawkToScript.innerHTML = `
      var Tawk_API=Tawk_API||{};
      Tawk_API.visitor = {
        name  : 'John Doe',
        email : 'johndoe@example.com'
      };
      Tawk_API.onLoad = function(){
        Tawk_API.setAttributes({
          'name'  : 'John Doe',
          'email' : 'johndoe@example.com'
        }, function(error){});
      };
      Tawk_API.showWidget();
    `;
    document.body.appendChild(tawkToScript);

    return () => {
      document.head.removeChild(s);
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to my website!</h1>
    </div>
  );
};

export default ChatWidget;
