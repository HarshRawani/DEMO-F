import React, { useState, useRef, useCallback } from "react";

const CATEGORIES = [
  "Account Help",
  "Badges & Certificates",
  "Challenges",
  "Setup & Administration",
  "Paid Contributor",
  "Feature Request",
  "Resume Builder",
  "Tracker",
  "Mock Interviews",
  "QuickApply",
  "Payments",
  "Other",
];

export default function Help2() {
  const [selected, setSelected] = useState(new Set());
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const toggleCategory = (name) => {
    setSelected((prev) => {
      const s = new Set(prev);
      s.has(name) ? s.delete(name) : s.add(name);
      return s;
    });
  };

  const onFilesAdded = useCallback((fileList) => {
    const arr = Array.from(fileList).map((f) => ({
      id: `${f.name}-${f.size}-${f.lastModified}`,
      file: f,
      url: URL.createObjectURL(f),
    }));
    setFiles((p) => [...p, ...arr].slice(0, 10));
  }, []);

  const onDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer?.files?.length) onFilesAdded(e.dataTransfer.files);
  };
  const onDragOver = (e) => e.preventDefault();

  const removeFile = (id) => setFiles((p) => p.filter((f) => f.id !== id));
  const pickFiles = () => fileInputRef.current?.click();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      categories: Array.from(selected),
      description,
      files: files.map((f) => f.file.name),
    });
    alert("Submitted — check console.");
    setSelected(new Set());
    setDescription("");
    setFiles([]);
  };

  return (
    <div className="bg-[#141a2b]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2a3550]/30 shadow-2xl">
      <h2 className="text-sm text-[#a0aec0]">Support</h2>
      <h1 className="text-3xl font-bold text-[#e0e6f6] mb-6">
        How can we assist you today?
      </h1>

      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="block text-[#e0e6f6] font-semibold mb-3">
            Category
          </label>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => {
              const active = selected.has(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#2a3550] text-[#e0e6f6] border border-[#7f5af0]"
                      : "bg-[#1c2337] text-[#a0aec0] border border-[#2a3550] hover:bg-[#2a3550]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#e0e6f6] font-semibold mb-3">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please share additional details about your request/issue"
            className="w-full rounded-lg bg-[#1c2337] border border-[#2a3550] p-4 text-[#e0e6f6] placeholder-[#a0aec0] focus:outline-none focus:border-[#7f5af0]"
            rows={6}
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#e0e6f6] font-semibold mb-2">
            Attachments{" "}
            <span className="text-[#a0aec0] text-sm">(optional)</span>
          </label>

          <div
            className="border border-dashed border-[#2a3550] rounded-lg p-6 text-center cursor-pointer hover:border-[#7f5af0]"
            onDrop={onDrop}
            onDragOver={onDragOver}
            onClick={pickFiles}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*,.pdf"
              className="hidden"
              onChange={(e) => onFilesAdded(e.target.files)}
            />
            <p className="text-[#a0aec0]">
              <span className="block font-medium mb-1">
                Drag and drop your files here
              </span>
              Supported formats: png, jpeg, jpg, pdf, mp4, mov
            </p>
          </div>

          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((f) => (
                <div
                  key={f.id}
                  className="flex items-center justify-between p-2 bg-[#161922] rounded-md border border-[#2a3550]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-10 bg-[#0f1114] rounded-sm overflow-hidden">
                      {f.file.type.startsWith("image/") ? (
                        <img
                          src={f.url}
                          alt={f.file.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          📄
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#e0e6f6]">
                        {f.file.name}
                      </div>
                      <div className="text-xs text-[#a0aec0]">
                        {(f.file.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFile(f.id)}
                    className="text-[#a0aec0] px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg shadow-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
