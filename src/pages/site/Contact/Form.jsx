const Form = () => (
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="First Name" className="border p-3 rounded w-full" />
      <input type="text" placeholder="Last Name" className="border p-3 rounded w-full" />
    </div>
    <input type="email" placeholder="Email" className="border p-3 rounded w-full" />
    <textarea placeholder="Message" rows={5} className="border p-3 rounded w-full"></textarea>
    <button
      type="submit"
      className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
    >
      Submit
    </button>
  </form>
);

export default Form;
