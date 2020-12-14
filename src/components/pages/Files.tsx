import React from 'react';
import {Empty, Button} from 'antd';

const Files = () => {
  return (
    <div>
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
          Data not found.
      </span>
    }
  >
    {/* <Button type="primary">Create Now</Button> */}
  </Empty>    </div>
  );
}

export default Files;
