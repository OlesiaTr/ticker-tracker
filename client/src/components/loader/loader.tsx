import { Rings } from 'react-loader-spinner';

import { theme } from '../../styles';

const Loader = () => {
  return (
    <Rings
      height="200"
      width="200"
      color={theme.colors.mainBlack}
      radius="6"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default Loader;
