import { useRef } from "react";
import { search } from "../actions/images";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ImageList } from "./ImageList";
import { Images } from "../actions/types";

const Test = ({
  images: { loading, images, totalCount },
  search,
}: {
  images: any;
  search: any;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    search(inputRef?.current?.value);
    if (inputRef.current != null) inputRef.current.value = "";
  };

  console.log(images);

  return (
    <div className="search">
      <h1>ImageFinderTS</h1>
      <div className="input">
        <input type="text" ref={inputRef}></input>
        <button onClick={onClick}>Search</button>
      </div>
      {loading ? (
        ""
      ) : (
        <ImageList
          items={images}
          render={(item: Images) => (
            <>
              <img src={item.thumbnail} alt="Imagem procurada"></img>
            </>
          )}
        />
      )}
    </div>
  );
};

Test.propTypes = {
  search: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  images: state.images,
});

export default connect(mapStateToProps, { search })(Test);
