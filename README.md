# Basic k8s

## Delete service
```js
kubectl delete svc service_name
```

#### Get all service
```js
kubectl get service
```

#### Create service
```js
kubectl create -f service.yaml 
```

#### Get all pods
```js
kubectl get pods
```

#### Create deployment
```js
kubectl create -f deployment.yaml
```

#### Delete deployment
```js
kubectl delete deployment nestjs-k8s-dungtv
```

#### Get all context
```js
kubectl config get-contexts
```

#### Config context k8s
```js
kubectl config use-context docker-desktop
```

#### Create pod
```js
kubectl run nestjs-k8s --image trandung2001/nestjs-k8s
```

#### Get pod
```js
kubectl get pod
```

#### Logs pod
```js
kubectl logs pod-name
```

#### Delete pod
```js
kubectl delete pod pod-name --force
```

#### Script deployment
```js
kubectl create deployment nestjs --image=trandung2001/nestjs-k8s:latest --port=3000 --replicas=2
```

#### Script create service
```js
kubectl expose deployment/nestjs --type="NodePort" --port 3000
```