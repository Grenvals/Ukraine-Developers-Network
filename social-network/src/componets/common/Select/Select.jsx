// import './select.scss';

import React from 'react';
import Select from 'react-select';
import cn from 'classnames';
import style from './Select.module.scss';

const SelectBlock = ({ label, onChange, options, defaultValue, className }) => {
  return (
    <div className={cn(style.singleSelect, { [className]: className })}>
      <h3 className={style.singleSelect__label}>{label}</h3>
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
