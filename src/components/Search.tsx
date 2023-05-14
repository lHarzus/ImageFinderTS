import { useRef, useState } from "react";
import { search } from "../actions/images";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ImageList } from "./ImageList";
import { Images } from "../actions/types";
import { Pagination } from "./Pagination";

const Search = ({
  images: { loading, images },
  search,
}: {
  images: any;
  search: any;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState<Images | undefined>(undefined);
  const [active, setActive] = useState(false);

  const onClick = () => {
    search(inputRef?.current?.value);
    if (inputRef.current != null) inputRef.current.value = "";
  };

  return (
    <div className="search">
      <h1>ImageFinderTS</h1>
      <div className="input">
        <input type="text" ref={inputRef} role="input"></input>
        <button onClick={onClick} role="button">
          Search
        </button>
      </div>
      {loading ? (
        ""
      ) : (
        <>
          <ImageList
            items={images}
            render={(item: Images) => (
              <>
                <img
                  src={item.thumbnail}
                  alt="Imagem procurada"
                  onClick={() => {
                    setItem(item);
                    setActive(true);
                  }}
                ></img>
              </>
            )}
            page={page}
            perPage={10}
          />

          <Pagination
            currentPage={page}
            pages={Math.ceil(images.length / 10)}
            setPage={setPage}
          />
        </>
      )}
      <div className={active ? "full-image" : "blocked"}>
        <i
          className="bi bi-x-circle"
          onClick={() => {
            setActive(false);
          }}
        ></i>
        <a href={item?.webpageUrl} target="_blank">
          {item?.title}
        </a>
        <img src={item?.url}></img>
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  images: state.images,
});

export default connect(mapStateToProps, { search })(Search);
