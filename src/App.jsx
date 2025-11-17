import Card from "./components/Card";

const App = () => {
  return (
    <div className="bg-gray-500 min-h-screen py-10">
      <div className="main-container px-5 md:px-10 lg:px-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

          <Card
            image="/airport.png"
            icon="/aeroplane-icon.png"
            title="Airport"
          />

          <Card
            image="/cleaning.png"
            icon="/cleaning-icon.png"
            title="Airport"
          />

          <Card
            image="/construcation.png"
            icon="/construction-con.png"
            title="Airport"
          />

          <Card
            image="/courier.png"
            icon="/courier-icon.png"
            title="Airport"
          />

          <Card
            image="/leisure.png"
            icon="/leisure-icon.png"
            title="Airport"
          />

          <Card
            image="/logistics.png"
            icon="/logistic-icon.png"
            title="Airport"
          />

          <Card
            image="/retail.png"
            icon="/retail-icon.png"
            title="Airport"
          />

          <Card
            image="/security.png"
            icon="/security-icon.png"
            title="Airport"
          />

          <Card
            image="/security (1).png"
            icon="/security-icon.png"
            title="Airport"
          />

        </div>
      </div>
    </div>
  );
};

export default App;
