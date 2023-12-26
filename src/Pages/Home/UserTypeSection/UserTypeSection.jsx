

const UserTypesSection = () => {
  const userTypes = [
    {
      type: 'Developers',
      benefit: 'Efficiently manage coding tasks and project deadlines.',
    },
    {
      type: 'Corporate Professionals',
      benefit: 'Streamline work tasks and improve productivity in a corporate setting.',
    },
    {
      type: 'Bankers',
      benefit: 'Organize financial tasks and deadlines effectively.',
    },
    // Add more user types and benefits as needed
  ];

  return (
    <section className="py-8 px-2 md:px-4 lg:px-8 bg-gray-100 my-6 rounded-xl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Who Can Benefit from Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{userType.type}</h3>
              <p className="text-gray-700">{userType.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
