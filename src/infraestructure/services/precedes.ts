import axios from 'axios';

const getPrecedes = async (blocks: string[]): Promise<boolean | undefined> => {
  try {
    const result = await axios.post(
      'https://rooftop-career-switch.herokuapp.com/check?token=6218aa7a-5f3f-40c5-9711-602a820b06f7',
      {
        blocks,
      }
    );
    const { data } = result;
    return data.message;
  } catch (error: any) {
    const { status, message } = error;
    console.log(`error: ${status} ${message}`);
    throw new Error('Error while processing');
  }
};

export default getPrecedes;
