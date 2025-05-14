import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Spinner, ListGroup, Container, Alert } from 'react-bootstrap';

export default function Notifications() {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = Cookies.get('token');
        if (!token) throw new Error('لم يتم العثور على التوكن');

        // ضبط عنوان الـ API مع قيمة افتراضية
        const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
        const endpoint = `${baseUrl}/api/v1/notification?page=1&limit=50`;

        const res = await fetch(endpoint, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        // التحقق من حالة 404 أو غيرها
        if (res.status === 404) {
          throw new Error(`المسار غير موجود: ${endpoint}`);
        }

        // التحقق من نوع المحتوى
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('الاستجابة ليست بصيغة JSON');
        }

        const body = await res.json();
        if (!res.ok) {
          throw new Error(body.message || 'فشل جلب الإشعارات');
        }

        setNotifications(body.data.messages || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container className="py-4">
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : notifications.length === 0 ? (
        <p>لا توجد إشعارات</p>
      ) : (
        <ListGroup>
          {notifications.map((note, i) => (
            <ListGroup.Item key={i}>
              <div className="small text-muted">
                {new Date(note.sentAt).toLocaleString()}
              </div>
              <div>{note.message}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}
