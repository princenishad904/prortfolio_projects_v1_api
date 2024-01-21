let url = "https://cataas.com/cat";

async function getData() {
  let res = await axios.get(url);
  return res;
}

let a = async () => {
  let random = await getData();
  console.log(random);
};

a();
