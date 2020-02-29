import React from 'react';
import style from './Header.module.scss';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.logo}>UDN	<span className={style.name}>Ukraine developers Network</span></div>
				<div className={style.user}>
					<div className={style.user__flag}></div>
					<div className={style.user__name}>Victor</div>
					<div className={style.user__logo}>
						<div className="">
							<img src="https://pbs.twimg.com/profile_images/1167923688450052096/wvr50pbL_400x400.jpg" alt="" /></div>
					</div>
				</div>
			</div>
		</header>
	);

}

export default Header;