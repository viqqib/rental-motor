export default function MotorDetails({
    params,
}: {
    params: {motorId: String};
}) {
    return <h1>Details {params.motorId}</h1>
}