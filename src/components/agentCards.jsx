import React, { useContext } from "react";
import { TicketContext } from "./App";
import AgentIcon from "./agentIcons";

const AgentCards = () => {
  const { agentValue } = useContext(TicketContext);

  const [agents] = agentValue;

  return (
    <div className="text-center">
      {agents.map((agent) => (
        <div
          key={agent._id}
          className="rounded m-3 p-3 bg-white border-dark d-inline-block text-center"
          style={{ width: "350px" }}
        >
          <div className="p-0 d-inline-block">
            <AgentIcon title={agent.name.charAt(0).toUpperCase()} />
          </div>
          <h3>Name: {agent.name}</h3>
          <h5>Email: {agent.email}</h5>
          <h5>Role: {agent.role}</h5>
          <h5>Type: {agent.type}</h5>
          <button type="button" className="btn btn-primary m-2">
            Assign ticket
          </button>
          <button type="button" className="btn btn-secondary m-2">
            Contact
          </button>
        </div>
      ))}
    </div>
  );
};

export default AgentCards;
