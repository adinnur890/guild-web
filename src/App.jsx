import { useState } from "react";

export default function App() {
  const [nickname, setNickname] = useState("");
  const [uid, setUid] = useState("");
  const [level, setLevel] = useState("");

  const handleJoin = () => {
    const message = `🔥 TWISTED BIG 🔥
Nickname: ${nickname}
UID: ${uid}
Level: ${level}`;

    const url = `https://wa.me/6283879204375?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>JOIN GUILD TWISTED</h1>
        <p style={styles.subtitle}>Buktikan skill lo & jadi bagian angkota TWISTED</p>

        <input
          placeholder="Nickname"
          onChange={(e) => setNickname(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="UID"
          onChange={(e) => setUid(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Level Akun"
          onChange={(e) => setLevel(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleJoin} style={styles.button}>
          🚀 JOIN VIA WHATSAPP
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #000000, #0f2027)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },
  card: {
    background: "#111",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 0 20px #00ffcc",
    width: "300px",
    textAlign: "center",
  },
  title: {
    color: "#00ffcc",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "20px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #00ffcc",
    background: "#000",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#00ffcc",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};