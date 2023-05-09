import { useState } from "react";
import { search } from "../actions/images";
import { useSelector } from "react-redux";
import { RootStore } from "../store";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ImagesDispatchTypes } from "../actions/types";

const Test = ({ images, search }: { images: any; search: any }) => {
  const [searchParam, setSearchParam] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchParam(e.target.value);

  const onClick = () => {
    console.log("procurei");

    search(searchParam);
  };

  console.log(images);

  return (
    <div>
      <h1>Image Search</h1>
      <input type="text" onChange={onChange} value={searchParam}></input>
      <button onClick={onClick}>Search</button>
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
