export async function updateGroup(
  groupId: string,
  data: { students: string[] }
) {
  const res = await fetch(`/api/groups?id=${groupId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "Failed to update group");
  return json.group;
}
