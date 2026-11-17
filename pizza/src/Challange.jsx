export default function Challange() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src="pizzas/foccacia.jpg" alt="ok" />;
}

function Intro() {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis
        maxime voluptatum earum, nostrum non nesciunt voluptas quam deserunt
        autem laudantium hic amet id, neque rem sit asperiores esse quis
        recusandae fugiat? Doloribus culpa laborum, cupiditate ullam suscipit
        dolore architecto necessitatibus nam. Adipisci harum animi ad? Officiis
        eveniet, incidunt vel exercitationem facere, minima delectus,
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="html+css" emoji="💪" color="blue" />
      <Skill skill="javascript" emoji="💪" color="green" />
      <Skill skill="react" emoji="💪" color="orange" />
      <Skill skill="web design" emoji="💪" color="yellow" />
      <Skill skill="git+github" emoji="💪" color="purple" />
      <Skill skill="python" emoji="👶" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <span style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </span>
  );
}
