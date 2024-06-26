import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { CSSProperties, useState } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';

export interface SearchBoxProps extends FormControlProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  formClassName?: string;
  size?: 'sm' | 'lg';
  style?: CSSProperties;
}

const SearchBox = ({
  placeholder = 'Search',
  size,
  className,
  inputClassName,
  formClassName,
  style,
  ...rest
}: SearchBoxProps) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearchBox = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    
    <div className={classNames('search-box', className)} style={{ ...style }}>
      <form className={classNames('position-relative', formClassName)}>
        <Form.Control
          type="search"
          placeholder={placeholder}
          className={classNames('search-input search', inputClassName)}
          size={size}
          onFocus={toggleSearchBox}
          onBlur={toggleSearchBox}
          {...rest}
        />
        <FontAwesomeIcon icon={faSearch} className="search-box-icon" />
      </form>
    </div>
  );
};

export default SearchBox;
