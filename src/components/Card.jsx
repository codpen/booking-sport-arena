import React from "react";

export function Card({ img, title, location, price }) {
  return (
    <div className="rounded-2xl">
      <img className="rounded-t-xl" src={img} alt="" />
      <div className="text-left m-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <h6 className="text-lg">{location}</h6>

        <h2 className="text-amber-500 text-xl">Rp. {price.toLocaleString()}</h2>
      </div>
    </div>
  );
}

export function TextCard({ img, text }) {
  return (
    // Install Material UI Icons for Image
    <div className="rounded-3xl border-2 outline-gray-500 text-center p-4">
      <img className="" src={img} alt="" />
      <h5>{text}</h5>
    </div>
  );
}

export function ListCategory() {
  return (
    <>
      <h4 className="uppercase text-center text-3xl my-8"> Category</h4>
      <div className="grid grid-cols-4 gap-10 my-10 mx-32">
        <TextCard
          // img={}
          text="Futsal"
        />
        <TextCard
          // img={}
          text="Basket"
        />
        <TextCard
          // img={}
          text="Badminton"
        />
        <TextCard
          // img={}
          text="Volley"
        />
      </div>
    </>
  );
}

export function ListArena() {
  return (
    <>
      <h4 className="text-center text-3xl my-8 ">LIST ARENA</h4>
      <div className="grid grid-cols-4 gap-10 my-10">
        <Card
          img="https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Soccer Field Jakarta"
          location="Jakarta"
          price={1500000}
        />
        <Card
          img="https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Soccer Field Bandung"
          location="Bandung"
          price={1200000}
        />
        <Card
          img="https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Soccer Field Yogyakarta"
          location="Yogyakarta"
          price={1000000}
        />
        <Card
          img="https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Soccer Field Malang"
          location="Malang"
          price={1300000}
        />
        <Card
          img="https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Soccer Field Semarang"
          location="Semarang"
          price={1300000}
        />
        <Card
          img="https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Soccer Field Surabaya"
          location="Surabaya"
          price={1300000}
        />
      </div>
    </>
  );
}
