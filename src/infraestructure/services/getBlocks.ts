import axios from 'axios';

const getBlocks = async () => {
  const result = await axios.get(
    'https://rooftop-career-switch.herokuapp.com/blocks?token=6218aa7a-5f3f-40c5-9711-602a820b06f7'
  );
  const { data } = result.data;
  return data;
};

export default getBlocks;
