import './select.scss';

import React from 'react';
import Select from 'react-select';
import cn from 'classnames';

const SelectBlock = ({ label, onChange, options, defaultValue, className }) => {
  return (
    <div className={cn('singleSelect', { [className]: className })}>
      <h3 className="singleSelect__label">{label}</h3>
      <Select
        className="select"
        classNamePrefix="select"
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        labelKey={'label'}
        isSearchable={false}
      />
    </div>
  );
};

export { SelectBlock as Select };
