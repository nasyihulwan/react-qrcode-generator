import { useState, useEffect } from "react";
import QRCode from "qrcode";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 1.5,
        color: {
          dark: "#000000ff",
          light: "#ffffffff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  useEffect(() => {
    document.title = "QR Code Generator";
  }, []);

  return (
    <div className="app">
      <h1>QR CODE GENERATOR</h1>
      <input
        type="text"
        placeholder="e.g 123456"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} alt="qr-code" />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
