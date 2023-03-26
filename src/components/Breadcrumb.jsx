import './Breadcrumb.css';

import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  const { previousPage, currentPage } = props;

  return (
    <ul className="breadcrumb">
      <li><Link to="/">Home</Link></li>
      {
        previousPage && (
          <>
            <li className="breadcrum-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></li>
            <li><Link to="/portfolio">{previousPage}</Link></li>
          </>
        )
      }
      <li className="breadcrum-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></li>
      <li><span>{currentPage}</span></li>
    </ul>
  );
};

export default Breadcrumb;