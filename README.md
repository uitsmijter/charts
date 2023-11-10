![Uitsmijter Charts](charts.png "Uitsmijter Charts")

Visit installation instructions on [charts.uitsmijter.io](https://charts.uitsmijter.io).

## Install Uitsmijter with Helm Charts.

### Install Uitsmijter charts repository

```shell
helm repo add uitsmijter https://charts.uitsmijter.io/
helm repo update
```

### List available versions

```shell
helm search repo uitsmijter
```

### List all available versions including release candidates

```shell
helm search repo uitsmijter --devel
```

### Install Uitsmijter

```shell
helm install uitsmijter -f values.yaml uitsmijter/uitsmijter
```

Read more about the [configuration options](https://docs.uitsmijter.io/configuration/helm/) on the documentation page.

If you need support please visit our [discourse](https://discourse.uitsmijter.io) server.
