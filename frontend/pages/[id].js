export default function ZippedLink({ links }) {
  const openAll = () => {
    links.map((link) => {
      window.open(link.link);
    });
  };
  return (
    <>
      <div className="bg-gray-300 rounded p-10 text-center">
        <h1 className="text-gray-800">{links.length} link(s)</h1>
        <button
          onClick={() => {
            openAll();
          }}
        >
          Open all
        </button>

        <div className="w-20 mx-auto ">
          {links.map((link) => {
            return (
              <a
                className="text-blue-600 block"
                href={link.link}
                target="_blank"
              >
                {link.link}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const API_LINK = "http://127.0.0.1:8000/api/getlinks/" + id;

  const resp = await fetch(API_LINK);
  const links = await resp.json();

  return {
    props: {
      links,
    },
  };
};
