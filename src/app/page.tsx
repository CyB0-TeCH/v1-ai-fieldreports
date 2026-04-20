export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2">Welcome to ai-fieldreports</h2>
        <p className="text-slate-600">The core inspection engine for <span className="font-semibold text-blue-700">View Pro</span> national operations.</p>
      </section>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
          <h3 className="font-bold text-lg text-slate-800">Property Inspections</h3>
          <p className="text-sm text-slate-500 mb-4">Residential and mixed-use verification modules.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">Launch Module</button>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
          <h3 className="font-bold text-lg text-slate-800">VIN & Equipment</h3>
          <p className="text-sm text-slate-500 mb-4">Industrial machinery and vehicle identification tracking.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">Launch Module</button>
        </div>
      </div>
    </div>
  );
}
