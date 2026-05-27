export default function EditProfile() {
  return (
    <>
      <div style={{ background: "var(--color-background-secondary)", padding: "24px", borderRadius: "var(--border-radius-lg)" }}>
        <h2 className="sr-only">Twitter Edit Profile mockup</h2>

        <div style={{ background: "var(--color-background-primary)", borderRadius: "var(--border-radius-lg)", border: "0.5px solid var(--color-border-tertiary)", maxWidth: "600px", margin: "0 auto", overflow: "hidden" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <button style={{ background: "none", border: "none", padding: "4px", cursor: "pointer", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-primary)" }} aria-label="Close">
                <i className="ti ti-x" style={{ fontSize: "20px" }} aria-hidden="true"></i>
              </button>
              <span style={{ fontSize: "17px", fontWeight: 500, color: "var(--color-text-primary)" }}>Edit profile</span>
            </div>
            <button style={{ background: "var(--color-text-primary)", color: "var(--color-background-primary)", border: "none", borderRadius: "9999px", padding: "6px 18px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>Save</button>
          </div>

          {/* Banner + Avatar */}
          <div style={{ position: "relative", marginBottom: "56px" }}>
            <div style={{ background: "#CFD9DE", height: "130px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button style={{ background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }} aria-label="Edit banner photo">
                <i className="ti ti-camera" style={{ fontSize: "18px" }} aria-hidden="true"></i>
              </button>
            </div>

            <div style={{ position: "absolute", bottom: "-48px", left: "16px" }}>
              <div style={{ position: "relative", width: "80px", height: "80px" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#7F77DD", border: "4px solid var(--color-background-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: 500, color: "#fff" }}>A</div>
                <button style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", border: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }} aria-label="Edit profile photo">
                  <i className="ti ti-camera" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                </button>
              </div>
              <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", margin: "6px 0 0", textAlign: "center" }}>
                Edit your photo<br />with Imagine
              </p>
            </div>

            <div style={{ position: "absolute", bottom: "-48px", right: "16px" }}>
              <button style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: "9999px", padding: "6px 14px", fontSize: "13px", cursor: "pointer", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ti ti-sparkles" style={{ fontSize: "15px", color: "#7F77DD" }} aria-hidden="true"></i>
                Customize yourself in seconds
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div style={{ padding: "16px 16px 20px" }}>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>Name</label>
              <input type="text" defaultValue="Alex" style={{ width: "100%", boxSizing: "border-box" as const, fontSize: "15px", padding: "10px 12px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>Bio</label>
              <textarea rows={3} style={{ width: "100%", boxSizing: "border-box" as const, fontSize: "15px", padding: "10px 12px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)", resize: "none", fontFamily: "var(--font-sans)" }} />
            </div>

            <div>
              <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>Location</label>
              <input type="text" placeholder="Add your location" style={{ width: "100%", boxSizing: "border-box" as const, fontSize: "15px", padding: "10px 12px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}