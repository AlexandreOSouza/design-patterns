export default function withLoader(Element, url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <Element {...props} data={data} />;
}
