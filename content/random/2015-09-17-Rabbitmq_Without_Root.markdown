Title: Rabbitmq Without Root
Date: 2015-09-17
Categories: programming



# Setup

## Do a fresh install

~~~ bash
sudo apt-get install -y rabbitmq-server
~~~

## Enable management plugin

~~~ bash
sudo rabbitmq-plugins enable rabbitmq_management
~~~

## Shut down the rabbitmq server

~~~ bash
sudo rabbitmqctl stop
~~~

## Remove the mnesia directory, which was created as user rabbitmq, not what
we want.

~~~ bash
sudo rm -rf /var/lib/rabbitmq/mnesia
~~~

## Prevent rabbitmq from auto starting on boot

~~~bash
sudo update-rc.d -f rabbitmq-server remove
~~~

* Rename the rabbitmq supplied commands that enforce user==rabbitmq or root
* This prevents innocent people from inadvertently using them. Entirely
optional.

~~~ bash
sudo mv /usr/sbin/rabbitmqctl /usr/sbin/rabbitmqctl_dont_use
sudo mv /usr/sbin/rabbitmq-plugins /usr/sbin/rabbitmq-plugins_dont_use
sudo mv /usr/sbin/rabbitmq-server /usr/sbin/rabbitmq-server_dont_use
~~~

## Change ownership of all files previously created by RabbitMQ to
desired_user

~~~ bash
sudo chown -R desired_user:desired_user /var/lib/rabbitmq
sudo chown -R desired_user: desired_user /var/log/rabbitmq
~~~

# Launching as desired_user

~~~ bash
    export RABBITMQ_CONFIG_FILE=/home/desired_user/config/rabbitmq
    export RABBITMQ_SERVER_ERL_ARGS="-setcookie rabbit"
    export RABBITMQ_CTL_ERL_ARGS="-setcookie rabbit"
~~~

# Note that this is not the "normal" rabbitmq-server script in /usr/sbin/

~~~ bash
  /usr/lib/rabbitmq/bin/rabbitmq-server start
~~~

* Finally, in `/home/desired_user/config/rabbitmq.Config`:

~~~ python
[
  {rabbit,
    [{cluster_nodes, ['rabbit at play', 'rabbit at play2']}
    ]
  }
].
~~~