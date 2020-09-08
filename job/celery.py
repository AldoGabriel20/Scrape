from __future__ import absolute_import, unicode_literals

from celery import Celery
# from celery import group

app = Celery('job',
            broker = 'amqp://localhost//',
            # broker = 'amqp://guest:**@localhost:5672//',
            backend='rpc://',
            include=['job.tasks'])

# app = Celery('tasks', backend='rpc://', broker = 'amqp://localhost//')

# Optional configuration, see the application user guide.
app.conf.update(
    result_expires=3600,
)

if __name__ == '__main__':
    app.start()
