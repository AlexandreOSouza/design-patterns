// Pass data to components
/* function App() {
  const data = {};

  return (
    <div>
      <SideBar data={data} />
      <Content data={data} />
    </div>
  );
}

const SideBar = ({ data }) => <List data={data} />;
const List = ({ data }) => <ListItem data={data} />;
const ListItem = ({ data }) => <span>{data.listItem}</span>;

const Content = ({ data }) => (
  <div>
    <Header data={data} />
    <Block data={data} />
  </div>
);
const Header = ({ data }) => <div>{data.title}</div>;
const Block = ({ data }) => <Text data={data} />;
const Text = ({ data }) => <h1>{data.text}</h1>; */

// Using Provider
const DataContext = React.createContext();

function AppProvider() {
  const data = {};

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  );
}

const SideBar = () => <List />;
const List = () => <ListItem />;
const Content = () => (
  <div>
    <Header />
  </div>
);

function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = React.useContext(DataContext);
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = React.useContext(DataContext);
  return <div>{data.title}</div>;
}
